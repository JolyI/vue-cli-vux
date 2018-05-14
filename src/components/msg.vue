<template>
  <div class="msg-popup-container" v-if="isShowMsg">
      <div @click="hidePopup" class='base-alert-mask'>
        <div class='base-alert-dialog' @click.prevent.stop :class="{'success-type': btnType !== 'default'}">
          <div class="close-icon" @click="hidePopup" v-if="closeIcon"></div>
          <div class='base-alert-header' v-if="title" v-html="title">
          </div>
          <div class='base-alert-content' v-html="content" :class="{'solid': btnType === 'details'}"></div>
          <div class='base-alert-footer clearfix' :class="{'clear-margin-bottom': buttons.length}" v-if="btnType === 'default'">
            <div v-for="(item, index) in buttons" @click="alertEvent(item.fn)" :key="index" class="base-alert-btn">
              {{item.text}}
            </div>
          </div>
          <div class='base-alert-footer clearfix' :class="{'clear-margin-bottom': buttons.length}" v-else>
            <div v-for="(item, index) in buttons" @click="alertEvent(item.fn)" :key="index" class="base-alert-btn dafy-button success-btn">
              {{item.text}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  /**
   *弹窗组件
   * methods: showPopup
   * 使用方法：this.$store.commit('msgPopUp/showPopup', {
   *            title: '提示',
   *            content: '内容',
   *            closeIcon: true,
   *            btnType: 'default', //success // details
   *            buttons: [{text: '确认',
   *              fn: () => {
   *              }
   *            }]
   *          })
   */
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: 'msg-popup',
    data () {
      return {
      }
    },
    methods: {
      alertEvent (callBack) {
        callBack && callBack()
        this.hidePopup()
      },
      ...mapMutations('msgPopUp', [
        'showPopup',
        'hidePopup'
      ])
    },
    computed: mapState('msgPopUp', {
      isShowMsg: 'isShowMsg',
      title: 'msgTitle',
      content: 'msgContent',
      buttons: 'msgButtons',
      closeIcon: 'closeIcon',
      btnType: 'btnType'
    })
  }
</script>

<style lang="scss" scoped type="text/scss">
  @function pxToRem($px) {
    @return $px * 2 /100 + rem
  }
  .base-alert-mask {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    top: 0;
    left: 0;

    .base-alert-dialog {
      width: 80%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      border-radius: 0.1rem;
      text-align: center;
      .close-icon {
        position: absolute;
        top: pxToRem(16);
        right: pxToRem(16);
        color: #B1B1B1;
        width: pxToRem(15);
        height: pxToRem(15);
        &::after, &::before {
          content: "";
          display: block;
          position: relative;
          top: 50%;
          right: 0;
          transform-origin: bottom;
          border-bottom: 0.02rem solid #B1B1B1;
        }
        &::after {
          transform: translate(0, -50%) rotate(45deg);
        }
        &::before {
          transform: translate(0, -50%) rotate(135deg);
        }
      }
      .base-alert-header {
        font-family: PingFangSC-Medium;
        color: #656D79;
        font-size: pxToRem(18);
        padding: pxToRem(24) pxToRem(10) 0;
      }
      .base-alert-content {
        display: -webkit-box;
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin: pxToRem(15) pxToRem(16) pxToRem(15) pxToRem(16);
        min-height: pxToRem(45);
        font-size: pxToRem(13);
      }
      .base-alert-footer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        margin-bottom: pxToRem(27);
        font-size: 0.34rem;
        .base-alert-btn {
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          height: 0.91rem;
          line-height: 0.91rem;
          border-top: pxToRem(1) solid #e5e5e5;
          &:last-child {
            color: #343434;
          }
          &:not(:first-child) {
            border-left: pxToRem(1) solid #e5e5e5;
          }
        }
        .success-btn {
          background-color: #00BBC0;
          color: white !important;
          border: 0.01rem solid #00BBC0;
          border: .01rem solid #009ea3;
          margin: 0.4rem 0.2rem;
        }
      }
      .clear-margin-bottom {
        margin-bottom: 0;
      }
      &.success-type {
        .base-alert-header {
          padding-top: 0.25rem;
        }
        .base-alert-content {
          -webkit-box-pack: start;
          justify-content: flex-start;
          border-top: 0.02rem dashed silver;
          padding: 0.2rem 0;
        }
        .close-icon {
          transform: scale(1.2);
        }
      }
      .base-alert-content.solid {
        border-top: 0.01rem solid silver;
      }
    }
  }
</style>
