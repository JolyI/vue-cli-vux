<template>
    <div class="load-container" v-if="loadState">
      <div class="loading">
        <div class="loading-animation">
          <img src="../assets/loading.png"/>
        </div>
        <!-- <p class="loading-text">loading...</p> -->
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: '',
    data () {
      return {}
    },
    computed: mapState(['loadState'])
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .load-container {
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    z-index: 10000;
    .loading {
      position: fixed;
      width: 7.6em;
      min-height: 7.6em;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      border-radius: 0.05rem;
      font-size: .25rem;
      color: #000;
      justify-content: center;
      align-items: center;


      .loading-animation {

        display: -webkit-box;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        img {
          width: 1.2rem;
          height: auto;
          animation: rotate 1s infinite linear;
        }

        @keyframes rotate {
          from {
            transform:rotate(0deg);
          }
          to {
            transform:rotate(360deg);
          }
        }
      }

      .loading-text {
        width: 100%;
        height: 2em;
        line-height: 2em;
        text-align: center
      }
    }
  }
</style>
