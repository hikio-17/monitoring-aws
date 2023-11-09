<script setup lang="ts">
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const loading: Ref<boolean> = ref(false);
const rememberMe: Ref<boolean> = ref(false);
const errorMessage: Ref<string> | Ref<Object> = ref('');
const error: Ref<boolean> = ref(false);

onMounted(() => {
 const storedExpiryTime = localStorage.getItem('expiryTime');
 if (storedExpiryTime) {
  const expiryTime = parseInt(storedExpiryTime);
  if (Date.now() > expiryTime) {
   localStorage.removeItem('expiryTime');
   localStorage.removeItem('rememberMe');
   localStorage.removeItem('email');
  } else {
   const storedRememberMe = localStorage.getItem('rememberMe');
   if (storedRememberMe) {
    rememberMe.value = JSON.parse(storedRememberMe);
    if (rememberMe.value) {
     const storedEmail = localStorage.getItem('email');
     if (storedEmail) {
      email.value = storedEmail;
     }
    } else {
     email.value = '';
    }
   }
  }
 }
});

async function login(): Promise<void> {
 if (!email.value || !password.value) {
  error.value = true;
  errorMessage.value = 'Email dan password harus diisi';
  return;
 }
 loading.value = true;
 try {
  await $fetch('/api/login', {
   method: 'POST',
   body: {
    email: email.value,
    password: password.value,
   },
  });
 } catch (err) {
  error.value = true;
  errorMessage.value = err || 'Email atau password salah';
 } finally {
  loading.value = false;
  email.value = '';
  password.value = '';
  error.value = false;
  errorMessage.value = '';
 }
}

function validateEmail(): void {
 if (!email.value) {
  error.value = true;
  errorMessage.value = 'Email harus diisi';
 } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
  error.value = true;
  errorMessage.value = 'Email tidak valid';
 } else {
  error.value = false;
  errorMessage.value = '';
 }
}

function validatePassword(): void {
 if (!password.value) {
  error.value = true;
  errorMessage.value = 'Password harus diisi';
 } else if (password.value.length < 6) {
  error.value = true;
  errorMessage.value = 'Password minimal 6 karakter';
 } else {
  error.value = false;
  errorMessage.value = '';
 }
}

function storeRememberMe(): void {
 const expiryTime: number = Date.now() + 7 * 24 * 60 * 60 * 1000;
 localStorage.setItem('expiryTime', JSON.stringify(expiryTime));
 localStorage.setItem('rememberMe', JSON.stringify(rememberMe.value));
 if (rememberMe.value) {
  localStorage.setItem('email', email.value);
 } else {
  localStorage.setItem('email', '');
 }
}
</script>

<template>
 <div class="hold-transition login-page">
  <div class="login-box">
   <!-- /.login-logo -->
   <div class="card card-outline card-primary">
    <div class="card-header text-center">
     <NuxtLink to="/" class="h1"><b>Monitoring</b> Debit Air</NuxtLink>
    </div>
    <div class="card-body">
     <p class="login-box-msg">Sign in to start your session</p>

     <form @submit.prevent="login">
      <div class="input-group mb-3">
       <input type="email" class="form-control" placeholder="Email" v-model="email" @input="validateEmail" />
       <div class="input-group-append">
        <div class="input-group-text">
         <span class="fas fa-envelope"></span>
        </div>
       </div>
      </div>
      <div class="input-group mb-3">
       <input type="password" class="form-control" placeholder="Password" v-model="password" @input="validatePassword" />
       <div class="input-group-append">
        <div class="input-group-text">
         <span class="fas fa-lock"></span>
        </div>
       </div>
      </div>
      <div class="text-center text-danger mb-3">
       {{ errorMessage }}
      </div>
      <div class="row">
       <div class="col-8">
        <div class="icheck-primary">
         <input type="checkbox" id="remember" v-model="rememberMe" @change="storeRememberMe" :disabled="!email" />
         <label for="remember"> Remember Me </label>
        </div>
       </div>
       <!-- /.col -->
       <div class="col-4">
        <button type="submit" class="btn btn-primary btn-block" :disabled="error">Sign In</button>
       </div>
       <!-- /.col -->
      </div>
     </form>

     <div class="social-auth-links text-center mt-2 mb-3">
      <a href="#" class="btn btn-block btn-primary"> <i class="fab fa-facebook mr-2"></i> Sign in using Facebook </a>
      <a href="#" class="btn btn-block btn-danger"> <i class="fab fa-google-plus mr-2"></i> Sign in using Google+ </a>
     </div>
     <!-- /.social-auth-links -->

     <p class="mb-1">
      <NuxtLink to="/forgot-password">I forgot my password</NuxtLink>
     </p>
     <p class="mb-0">
      <NuxtLink to="/auth/register" class="text-center">Register a new membership</NuxtLink>
     </p>
    </div>
    <!-- /.card-body -->
   </div>
   <!-- /.card -->
  </div>
 </div>
</template>
