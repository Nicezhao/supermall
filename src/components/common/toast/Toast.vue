<template>
  <div class="toast" v-show="isShow">
    <span >{{message}}</span>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
      message:'',
      isShow:false,
    }
  },
  methods: {
    showM(message,duration=2000){
      this.message =message;
      this.isShow = true;
      
      setTimeout(()=>{
        this.message = '';
        this.isShow = false;
      },duration)
    },
  },
}
</script>

<style>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 14px;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, .6);
  color: #fff;
  border-radius: 15%;
  z-index: 999;
}
</style>