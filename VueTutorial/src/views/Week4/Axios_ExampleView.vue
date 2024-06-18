<template>
  <div>
    <h2>Axios</h2>
    <h4>**see source code**</h4>
  </div>
</template>

<script setup>
import axios from 'axios';
import customAxios from '../../assets/axios/interceptor';
const url = 'apiUrl'
onMounted(() => {
  axios.defaults.xsrfCookieName = 'XSRF-TOKEN'
  axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'
  document.cookie = "XSRF-TOKEN=test"
  cancelRequest();
})
function basicAxios() {
  axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
    .catch(function (error) {
      console.error(error);
    })
}

async function getData() {
  try {
    const response = await axios.get(url, {
      params: {
        ID: '12345' // you can add your params here
      },
      // other config
    })
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function postData() {
  const requestData = {
    UserName: 'Jack Paul',
    Password: '12345678'
  };
  try {
    // destruct data from response
    const { data } = await axios.post(url, requestData, {
      headers: {
        // If you set content-type into json, axios will try transforming your requestData into JSON.
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error);
  }
}

async function multiRequest() {
  const [name, perm] = await Promise.all([getUserAccount(), getUserPermissions()]);
  console.log(name);
  console.log(perm);
  function getUserAccount() {
    return axios.get('/user/12345');
  }

  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }
}

function cancelRequest() {
  // create a controller Object.
  const controller = new AbortController();
  axios.get(url, {
    // use signal (default is false) to trigger cancel action.
    signal: controller.signal,
  })
    .then((r) => { })
    .catch((e) => {
      // It will catch an error when canceling the request.
      // axios.isCancel() will return true if we cancel the request.
      if (axios.isCancel(e)) console.log('This request is canceled');
    })
  // Cancel request with this function.
  controller.abort()
}

function formTest() {
  const obj = {
    x: 1,
    arr: [1, 2, 3],
    arr2: [1, [2], 3],
    users: [
      { name: 'Peter', surname: 'Griffin' },
      { name: 'Thomas', surname: 'Anderson' }
    ],
    'obj2{}': [{ x: 1 }]
  };
  axios.postForm(url, obj);
}


</script>

<style lang="scss" scoped></style>