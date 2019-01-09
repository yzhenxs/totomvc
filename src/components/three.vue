<template>
 <div class="three" :style="{backgroundColor:beijing}">第三个路由
     <br>
   <button @click="bianse">点我变色</button>
   <Sun></Sun>
   
   <div class="upload_box">
   <b>上传图片</b>
   <input type="file" name="file" id="file" accept="image/*" @change="imgChange();"/> <!--文件上传选择按钮-->
   <div id="preview">
   <img id="imghead" src="/style/images/blank.gif" width="800" height="600" /> <!--图片显示位置-->
    </div>
</div>

 </div>
</template>

<script>
import Sun from "./sun";
export default {
  name: "three",
  components: {
    Sun
  },
  data() {
    return {
      beijing: "blue"
      // msg: 'Welcome to Your Vue.js App'
    };
  },
  methods: {
    bianse() {
      this.beijing = "greenyelow";
    },
    imgChange(){
    console.log(111)
    let file =document.getElementById("file");
    let imgUrl =window.URL.createObjectURL(file.files[0]);
    let img =document.getElementById('imghead');
    img.setAttribute('src',imgUrl); // 修改img标签src属性值
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

