<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Absen</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Waktu Absen</label>
    <input type="time" class="form-control" id="inputEmail4" 
    v-model="absens.waktu_absen" />
      <div class="alert alert-danger" v-if="validation.waktu_absen">
        {{ validation.waktu_absen[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="absens.mahasiswa_id" />
      <div class="alert alert-danger" v-if="validation.mahasiswa_id">
        {{ validation.mahasiswa_id[0] }}
      </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>

</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const absens = reactive({
      waktu_absen: '',
      mahasiswa_id: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/absens/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.mahasiswa_id)
        absens.waktu_absen = response.data.data.waktu_absen
        absens.mahasiswa_id = response.data.data.mahasiswa_id
        
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let waktu_absen = absens.waktu_absen
      let mahasiswa_id = absens.mahasiswa_id
     
      axios.put(`http://127.0.0.1:8001/api/absens/${route.params.id}`, {
        waktu_absen: waktu_absen,
        mahasiswa_id: mahasiswa_id,
        matakuliah_id: matakuliah_id,
        keterangan: keterangan
      })
      .then(() => {
        router.push({
          name:'Absen'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      absens,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>