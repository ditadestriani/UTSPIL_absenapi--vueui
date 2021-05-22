import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/mahasiswa/Home.vue'
import Createmahasiswa from '../views/mahasiswa/Createmahasiswa.vue'
import Editmahasiswa from '../views/mahasiswa/Editmahasiswa.vue'
import Index from '../views/matkul/Index.vue'
import Creatematakuliah from '../views/matkul/Creatematakuliah.vue'
import Editmatakuliah from '../views/matkul/Editmatakuliah.vue'
import Absen from '../views/absen/Absen.vue'
import Createabsen from '../views/absen/Createabsen.vue'
import Editabsen from '../views/absen/Editabsen.vue'
import Smt from '../views/semester/Smt.vue'
import Createsmt from '../views/semester/Createsmt.vue'
import Editsmt from '../views/semester/Editsmt.vue'
import Kontrak from '../views/kontrak/Kontrak.vue'
import Createkontrak from '../views/kontrak/Createkontrak.vue'
import Editkontrak from '../views/kontrak/Editkontrak.vue'
import Jadwal from '../views/jadwal/Jadwal.vue'
import Createjadwal from '../views/jadwal/Createjadwal.vue'
import Editjadwal from '../views/jadwal/Editjadwal.vue'

const routes = [
  {
    path: '/',
    name: 'mahasiswa.home',
    component: Home
  },
  {
    path: '/createmahasiswa',
    name: 'Createmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createmahasiswa
  },
  {
    path: '/editmahasiswa:id',
    name: 'Editmahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editmahasiswa
  }, 
  {
    path: '/matkuls',
    name: 'Index',
    component: Index
  },
  {
    path: '/creatematakuliah',
    name: 'Creatematakuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Creatematakuliah
  },
  {
  path: '/editmatakuliah',
  name: 'Editmatakuliah',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Editmatakuliah
},
{
  path: '/absen',
  name: 'Absen',
  component: Absen
},
{
  path: '/createabsen',
  name: 'Createabsen',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createabsen
},
{
path: '/editabsen',
name: 'Editabsen',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editabsen
},
{
  path: '/smt',
  name: 'Smt',
  component: Smt
},
{
  path: '/createsmt',
  name: 'Createsmt',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createsmt
},
{
path: '/editsmt',
name: 'Editsmt',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editsmt
},
{
  path: '/kontrakmk',
  name: 'Kontrak',
  component: Kontrak
},
{
  path: '/createkontrak',
  name: 'Createkontrak',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createkontrak
},
{
path: '/editkontrak',
name: 'Editkontrak',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editkontrak
},
{
  path: '/jdwl',
  name: 'Jadwal',
  component: Jadwal
},
{
  path: '/createjadwal',
  name: 'Createjadwal',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Createjadwal
},
{
path: '/editjadwal',
name: 'Editjadwal',
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: Editjadwal
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router