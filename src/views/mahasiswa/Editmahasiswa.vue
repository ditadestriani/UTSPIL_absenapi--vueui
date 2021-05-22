<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Mahasiswa</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="mahasiswas.nama_mahasiswa" />
      <div class="alert alert-danger" v-if="validation.nama_mahasiswa">
        {{ validation.nama_mahasiswa[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="mahasiswas.alamat" />
      <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nomor Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="mahasiswas.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">email</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Masukkan Email"
    v-model="mahasiswas.email" />
    <div class="alert alert-danger" v-if="validation.email">
        {{ validation.email[0] }}
      </div>
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
    const mahasiswas = reactive({
      nama: '',
      no_tlp: '',
      alamat: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/mahasiswas/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama_mahasiswa)
        mahasiswas.nama_mahasiswa = response.data.data.nama_mahasiswa
        mahasiswas.alamat = response.data.data.alamat
        mahasiswas.no_tlp = response.data.data.no_tlp
        mahasiswas.email = response.data.data.email
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let nama_mahasiswa = mahasiswas.nama_mahasiswa
      let alamat = mahasiswas.alamat
      let no_tlp = mahasiswas.no_tlp
      let email = mahasiswas.email
      axios.put(`http://127.0.0.1:8001/api/mahasiswas/${route.params.id}`, {
        nama_mahasiswa: nama_mahasiswa,
        alamat: alamat,
        no_tlp: no_tlp,
        email: email
      })
      .then(() => {
        router.push({
          name:'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      mahasiswas,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>