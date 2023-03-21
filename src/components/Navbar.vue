<template>
   <nav>
    <v-app-bar app flat >  
        <v-toolbar-side-icon >
            <v-btn  text @click="drawer=!drawer">
                <v-icon color="grey">mdi-view-list</v-icon>
            </v-btn>
        </v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">todo</span>
            <span >ghassen</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn  flat color="grey  lighten-3  grey--text">
            <span>Sign out</span>
        </v-btn>
        
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
        <p>test</p>
    </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
data(){
    return{
        drawer:false
    }
}
}
</script>