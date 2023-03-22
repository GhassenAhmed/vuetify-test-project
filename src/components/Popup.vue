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
                    <v-btn flat class="success mx-3" @click="submit">Add</v-btn>
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
            }
        },
        methods:{
            submit(){
                console.log(this.title+this.content)
            }
        }
    }
</script>