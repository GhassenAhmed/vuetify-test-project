<template >
    <v-dialog max-width="600px" >
        <template v-slot:activator="{ on, attrs }">
            <v-btn flat slot="activator" class="success" v-bind="attrs" v-on="on">Add Project</v-btn>
        </template>  
        <v-card>
            <v-card-title>
                <h2>Add New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-text"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil-outline"></v-textarea>
                    <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field :value="due" slot="activator" label="Due Date" prepend-icon="mdi-panorama-wide-angle" v-bind="attrs" v-on="on"></v-text-field>
                        </template> 
                        <v-list>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-list>
                    </v-menu>
                    <v-btn class="success" flat>Add</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        data(){
            return{
                title:'',
                content:'',
                due:null
            }
        },
        methods:{
            submit(){
                console.log(this.title+this.content)
            }
        }
    }
</script>
<style>
.v-sheet.v-list {
    width: 289px;
}
.v-menu__content{
    min-width: 289px !important;
    top: 284px !important;
    left: 650px !important;
    transform-origin: left top !important;
    z-index: 204 !important;
}
</style>