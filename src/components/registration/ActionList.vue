<template>
    <div class="action-list">
        <div v-for="(item, i) of arraySelectedActions" :key="i" class="action-list__element">
            <div class="action-list__element-info"><div class="action-list__element-label">{{i+1 +'.'}}</div><span class="action-list__element-text">{{item.nameAction}}, {{item.nameObjectType}}</span></div>
            <div>
                <el-button type="danger" icon="el-icon-delete" circle @click="removeAction(i)"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState, mapMutations
    } from 'vuex'

    export default {
        name: "ActionList",
        computed: {
            ...mapState('registration', ['arraySelectedActions'])
        },
        methods: {
            ...mapMutations('registration', ['REMOVE_ACTION', 'CHECK_ACTION']),
            removeAction(index) {
                this.REMOVE_ACTION(index);
            }
        }
    }
</script>

<style scoped>
    .action-list {
        width: 90%;
        margin: 0px auto;
    }

    .action-list__element {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .action-list__element-info{
        display: flex;
    }
    .action-list__element-label{
        margin-right: 10px;
        font-weight: bold;
    }
    .action-list__element-text{
        width: 100%;
    }
</style>