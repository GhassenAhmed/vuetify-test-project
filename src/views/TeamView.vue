<template>
     <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5"> 
      <v-layout row wrap class="mt-5">
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
           <v-card flat class=" text-center pa-3 ml-3 mb-5  deep-purple lighten-4">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat color="grey lighten-2">
                <v-icon small left > mdi-send-outline</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
           </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      team:[
        {name:'Ghassen Ahmed',role:'front-end',avatar:'/avatar1.png'},
        {name:'Talel Mejri',role:'full stack developer',avatar:'/avatar2.png'},
        {name:'Hkimi Amine',role:'back-end',avatar:'/avatar3.png'},
        {name:'Naamen Malek',role:'graphic designer',avatar:'/avatar4.png'}
      ]
    }
  }
   
}
</script>
<style>

</style>