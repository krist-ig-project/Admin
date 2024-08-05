<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Email</th>
          <th>Time Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.time_created }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import userData from './user-data.json';

export default {
  data() {
    return {
      users: userData
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
