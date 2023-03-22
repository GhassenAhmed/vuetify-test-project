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
            <v-icon class="px-3">mdi-account-arrow-right-outline</v-icon>
        </v-btn>
        
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="deep-purple lighten-2">
        <v-layout column align-center >
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="../../public/avatar0.png" alt="" >
                </v-avatar>
                <p class="white--text subheading mt-1">Ghassen Ahmed</p>
            </v-flex>
        </v-layout>
        <v-list>
            <v-list-item v-for="i in links" :key="i.text" route :to="i.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{i.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{i.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-icon icon="md:info"></v-icon>
    </v-navigation-drawer>
    
   </nav>
   
</template>
<script>
export default {
data(){
    return{
        drawer:false,
        links:[
            {icon: 'mdi-view-dashboard',text:'Dashboard',route:'/'},
            {icon: 'mdi-folder',text:'My Projects',route:'/projects'},
            {icon: 'mdi-account',text:'Team',route:'/team'}
        ]
    }
}
}
</script>