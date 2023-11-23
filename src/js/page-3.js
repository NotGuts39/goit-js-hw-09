 document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector('.feedback-form');

      
      form.addEventListener('input', function (event) {
        if (event.target.name === 'email' || event.target.name === 'message') {
          
          const formData = {
            email: form.elements.email.value,
            message: form.elements.message.value,
            };
            
          localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        }
      });

      
      const chekData = localStorage.getItem('feedback-form-state');
      if (chekData) {
        const parsedData = JSON.parse(chekData);
        form.elements.email.value = parsedData.email;
        form.elements.message.value = parsedData.message;
      }

      
      form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (form.elements.email.value.trim() === '' || form.elements.message.value.trim() === '') {
      alert('Що вершить долю людства в цьому світі?');
      return;
    }

        
        const formData = {
          email: form.elements.email.value,
          message: form.elements.message.value,
          };
          
        console.log(formData);

        
        localStorage.removeItem('feedback-form-state');
        form.reset();
      });
    });