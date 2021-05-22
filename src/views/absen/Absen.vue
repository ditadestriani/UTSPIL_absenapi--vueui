<template>
  <div class="absen">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Slider />
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/createabsen">Add Absen</router-link>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Waktu Absen</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Nama Matakuliah</th>
      <th scope="col">Keterangan</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
   <tbody>
    <tr v-for="(absens, index) in absen" :key="index">
      <td>{{ absens.id }}</td>
      <td>{{ absens.waktu_absen }}</td>
      <td>{{ absens.mahasiswa_id }}</td>
      <td>{{ absens.matakuliah_id }}</td>
      <td>{{ absens.keterangan }}</td>
      <td>
        <router-link class="btn btn-success" :to="{name:'Editabsen', params:{id:absens.id}}">Edit</router-link>
        <button @click.prevent="absenDelete(absens.id)" class="btn btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import { ref, onMounted } from 'vue';
export default {
 
   setup(){
    let absen = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8001/api/absens')
      .then(response => {
        absen.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function absenDelete(id){
      axios.delete(`http://127.0.0.1:8001/api/absens/${id}`)
      .then(()=>{
        let z = this.absen.map(absen => absen.id).indexOf(id);
        this.absen.splice(z, 1)
      }).catch(error => {
        console.log(error)
      })
    }
      return {
      absen,
      absenDelete
    }
  }
}; 
</script>
