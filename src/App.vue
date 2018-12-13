<template>
  <div id="app">
    <div class="app-container">
      <div  class="router-view-container">
        <router-view></router-view>
      </div>
      <div class="app-sidebar">
        <div class="toggle-buttons">
          <router-link to="/mainpage">
            <icon name="home" class="toggle-button"></icon>
          </router-link>
          <router-link to="/statuspage">
            <icon name="menu" class="toggle-button"></icon>
          </router-link>
        </div>
        <div class="battery-status-container">
          <div class="battery-status"></div>
          <div class="battery-status"></div>
          <div class="battery-status"></div>
        </div>
        <div class="device-info"></div>
        <div class="button-style">全网播放</div>
        <div class="button-style">本机播放</div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "vue-svg-icon/Icon";
export default {
  name: 'App',
  components: {Icon}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .app-container{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .router-view-container{
    flex: 8 0 0;
  }
  .app-sidebar{
    flex: 2 0 0;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .toggle-buttons{
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    margin: 2rem 3rem;
    padding-bottom: 2rem;
  }
  .toggle-button{
    width: 2rem;
    height: 2rem;
    color: gray;
    cursor: pointer;
  }
  .toggle-button:hover{
    color: lightcoral;
  }
  .battery-status-container{
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid gray;
    margin: 0.5rem 3rem;
    padding-bottom: 2rem;
  }
  .battery-status{
    width: 2rem;
    height: 2.5rem;
    background-color: lightcoral;
  }
  .device-info{
    width: 70%;
    height: 20rem;
    margin: 0.5rem 3rem;
    background-color: lightgrey;
  }
  .button-style{
    user-select: none;
    margin-top: 1rem;
    width: 70%;
    padding: 0.8rem 0rem;
    display: flex;
    justify-content: center;
    align-content:center;
    background-color: lightgrey;
    cursor: pointer;
  }
  .button-style:hover{
    background-color: lightcoral;
  }
</style>
