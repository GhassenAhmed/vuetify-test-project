<template>
  <div class="project">
    <h1 class="subheading grey--text">Project</h1>
    <v-container class="my-5"> 
        <v-expansion-panels v-for="project in MyProjects" :key="project.person">
          <v-expansion-panel>
            <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text>
                  <div class="font-weight-bold">{{project.due}}</div>
                  <div>{{project.content}}</div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
          {title:'Authentification',person:'Talel Mejri',due:'25 mars 2023',status:'Overdue',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'},
          {title:'Design Etudiant page',person:'Ghassen Ahmed',due:'22 mars 2023',status:'Ongoing',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloribus fugit magnam aliquam quos nesciunt repellat perferendis quibusdam recusandae commodi.'}
        ]
      }
    },
    computed:{
      MyProjects(){
        return this.projects.filter(project=>{
          return project.person==='Ghassen Ahmed'
        })
      }
    }
  }
</script>
