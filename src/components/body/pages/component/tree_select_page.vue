<template>
    <div>
        <el-select v-model="mineStatus" multiple  placeholder="请选择" @change="selectChange">
            <el-option :value="mineStatusValue" style="height: auto">
                <el-tree :data="data" show-checkbox node-key="id" :props="defaultProps" check-strictly
                    @check-change="handleCheckChange" ref="tree">
                </el-tree>
            </el-option>
        </el-select>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                mineStatus: "",
                mineStatusValue: [],
                data: [{
                    id: 1,
                    label: '1',
                    children: [{
                        id: 2,
                        label: '1-1',
                        children: [{
                            id: 4,
                            label: '1-1-1'
                        }, {
                            id: 5,
                            label: '1-1-2'
                        }, {
                            id: 6,
                            label: '1-1-3'
                        }, {
                            id: 7,
                            label: '1-1-4'
                        }],
                    }, {
                        id: 3,
                        label: '1-2',
                        children: [{
                            id: 8,
                            label: '1-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            handleCheckChange() {
                let res = this.$refs.tree.getCheckedNodes(true, true); 
                let arrLabel = [];
                let arr = [];
                res.forEach(item => {
                    arrLabel.push(item.label);
                    arr.push(item);
                });
                this.mineStatusValue = arr;
                this.mineStatus = arrLabel;
            },
            selectChange(e) {
                var arrNew = [];
                var dataLength = this.mineStatusValue.length;
                var eleng = e.length;
                for (let i = 0; i < dataLength; i++) {
                    for (let j = 0; j < eleng; j++) {
                        if (e[j] === this.mineStatusValue[i].label) {
                            arrNew.push(this.mineStatusValue[i])
                        }
                    }
                }
                this.$refs.tree.setCheckedNodes(arrNew);
            },
        }
    }
</script>