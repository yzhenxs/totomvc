<template>
 <div class="two" :style="{backgroundColor:beijing}">第二个路由
     <br>
   <button @click="bianse">点我变色</button>
  <div @click.stop="add">添加</div>

     <VueDragResize v-for="item in number" :key="item.id"  @activated="gain"  style="background-color:yellow"  :isActive="true" :w="200" :h="200" v-on:resizing="resize" v-on:dragging="resize">
     <div>{{item.id}}</div>
     <div id="del" @click.stop="mydelted(item.id)" >X</div>
      <h3>Hello World!</h3>
      <p>{{ top }} х {{ left }} </p>
      <p>{{ width }} х {{ height }}</p>
    </VueDragResize>
   
   
   <Sun></Sun>
 </div>
</template>

<style>
#del{
  position: absolute;
  z-index: 999;
  width:20px;
  height:20px;
  background-Color:red;
}
</style>


<script>
import Sun from "./sun"
import VueDragResize from 'vue-drag-resize';
export default {
  name: 'two',
  components:{
    Sun,VueDragResize
  },
  data () {
    return {
        beijing:"green",
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        number:[{id:0,value:''}]
    }
  },
  methods:{
    add(){
    console.log(1111);
    this.number.push({id:this.number.length});
    },
    mydelted(index){
      console.log(index,'3333')
      this.number.splice(index,1)
    },


    bianse(){
     this.beijing='yellow'
    },
    gain(){
      console.log("打倒小日本");
      
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

