<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createmahasiswa">Add Mahasiswa</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Alamat</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Email</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
   <tbody>
    <tr v-for="(data, index) in mahasiswas" :key="index">
      <td>{{ data.id }}</td>
      <td>{{ data.nama_data }}</td>
      <td>{{ data.alamat }}</td>
      <td>{{ data.no_tlp }}</td>
      <td>{{ data.email }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editmahasiswa', params:{id:data.id}}">Edit</router-link>
        <button @click.prevent="mahasiswaDelete(data.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import { ref, onMounted } from 'vue';
export default {
  name: 'Home',
  components: {
    Slider
  },
   setup(){
    let mahasiswa = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8001/api/mahasiswas')
      .then(response => {
        mahasiswa.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function mahasiswaDelete(id){
      axios.delete(`http://127.0.0.1:8001/api/mahasiswas/${id}`)
      .then(()=>{
        let z = this.mahasiswa.map(mahasiswa => mahasiswa.id).indexOf(id);
        this.mahasiswa.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }
      return {
      mahasiswa,
      mahasiswaDelete
    }
  }
}; 
</script>
