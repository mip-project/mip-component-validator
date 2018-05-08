<template>
    <div :click="myFunction" class="mip-newscroll">
        <p onclick="myFunction()" class="mip-newscroll-text"> Test Example</p>
        <img src='../static/test.jpg'>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.mip-newscroll-text {
    position: fixed;
}
</style>
