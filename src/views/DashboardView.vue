<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5"> 

     

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small flat color="grey lighten-3 ml-4" elevation="1" @click="sortBy('person')" v-bind="attrs"
            v-on="on">
              <v-icon left small >mdi-account-outline</v-icon>
              <span class="action text-lowercase ">By Person</span>
            </v-btn>
          </template>
          <span>Sort by person name</span>
        </v-tooltip>
       

      </v-layout>


        <v-card flat class="pa-3 py-5" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`px-4 project ${project.status}`">
            <v-flex xs12 md6>
              <div class="caption grey--text">Project title</div>
              <div>{{project.title}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>{{project.person}}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due Date</div>
              <div>{{project.due}}</div>
            </v-flex>
            <v-flex xs2 sm4 md2>
              <div class="right">
                <v-chip  :class="`${project.status} my-3 white--text caption`" >{{ project.status }}</v-chip>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
        
    </v-container>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        projects:[
          {title:'Design Etudiant page',person:'Ghassen Ahmed',due:'22 mars 2023',status:'Ongoing',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'},
          {title:'Code up the home page',person:'Malek Naamen',due:'19 mars 2023',status:'Complete',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'},
          {title:'Design chef department page  ',person:'Hkimi Amine',due:'15 mars 2023',status:'Complete',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'},
          {title:'Authentification',person:'Talel Mejri',due:'25 mars 2023',status:'Overdue',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'}
        ]
      }
    },
    methods:{
      sortBy(prop){
        this.projects.sort((a,b)=>a[prop]<b[prop]?-1:1);
      }
    }
  }
</script>
<style>
.project.Complete{
  border-left: 4px solid rgb(13, 138, 13);
}
.project.Ongoing{
  border-left: 4px solid orange;
}
.project.Overdue{
  border-left: 4px solid red;
}
.theme--light.v-chip.Complete{
background: rgb(13, 138, 13);
}
.theme--light.v-chip.Ongoing{
background: orange;
}
.theme--light.v-chip.Overdue{
background: red;
}
</style>
