
export default function ({ app }, inject) {
    const auth = {
      login(username, password) {

      },
      logout() {

      },
      register(username, email, password) {
  
      }
   
    };
  
    inject('auth', auth);
  }
  