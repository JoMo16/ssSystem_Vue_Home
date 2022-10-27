<template>
  <div>
    <template>
      <el-table
          :data="tableData"
          border
          style="width: 100%">

        <el-table-column
            prop="date"
            label="交易时间"
            width="180">
        </el-table-column>

        <el-table-column
            prop="name"
            label="商品名称"
            width="180">
        </el-table-column>

        <el-table-column
            prop="name"
            label="价格"
            width="180">
        </el-table-column>

        <el-table-column
            prop="address"
            label="下载地址">
        </el-table-column>
      </el-table>
    </template>

  </div>
</template>

<script>
export default {
  name: "TradeHistory",
  data() {
    return {
      tableData:[

      ],

    }
  }
}
</script>

<style scoped>

</style>