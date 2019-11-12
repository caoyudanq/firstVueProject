<template>
  <div class="cmt-container">
      <h3>发表评论</h3>
      <hr>
      <textarea placeholder="请输入要评论的内容" maxlength="120"></textarea>
      <mt-button type="primary" size="large">发表评论</mt-button>
      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
              <div class="cmt-title">
                  第{{ i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{ item.add_time | dataFormat}}
              </div>
              <div class="cmt-body">
                  {{ item.content === "undefined"?"此用户很懒，没有留下评论": item.content }}
              </div>
          </div>
      </div>

      <mt-button type="danger" size="large" @click="this.getMore">加载更多</mt-button>
  </div>
</template>

<script> 
import {Toast} from 'mint-ui'
export default {
  name: '',
  data() { 
    return {
        pageIndex: 1, //默认展示第一页数据
        comments:[]
    }
  },
  props: ["id"],
  components:{
  },
  created() {
      this.getComments();

  },
  methods:{
      getComments(){
          this.$http.get("api/getcomments/"+this.id+"?pageindex=" + this.pageIndex)
          .then(result =>{
              console.log("result="+result.body.status)
              if(result.body.status === 0){
                  this.comments = this.comments.concat(result.body.message)
              }else{
                  Toast("获取评论数据失败")
              }
          })
      },
          getMore(){
              this.pageIndex++;
              this.getComments()
          }

  },
 }
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 16px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0px;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;

            }
            .cmt-body{
                  line-height: 30px;
                  text-indent: 2em;

            }
        }
    }
}
</style>