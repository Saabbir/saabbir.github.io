<template>
  <div class="u-py-32">
    <div class="l-wrap">
      <div class="c-copy">
        <h1 class="t-display-1">Contact</h1>
        <p>If you want to get in touch, send me an email at <a href="mailto:thesaabbir@gmail.com" class="c-custom-link">thesaabbir@gmail.com</a> or call me at <a href="tel:+8801789243439" class="c-custom-link">+8801789243439</a>.</p>
        <p>I'm also available on the social media. Feel free to message there.</p>
        <div class="c-social-media-grid u-mt-32">
          <a href="https://www.facebook.com/thesaabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-facebook" v-html="require('~/assets/images/svg/facebook.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Facebook</div>
              <div class="c-social-media__handle">@thesaabbir</div>
            </div>
          </a>
          <a href="https://twitter.com/thesaabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-twitter" v-html="require('~/assets/images/svg/twitter.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Twitter</div>
              <div class="c-social-media__handle">@thesaabbir</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/thesaabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-linkedin" v-html="require('~/assets/images/svg/linkedin.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Linkedin</div>
              <div class="c-social-media__handle">@thesaabbir</div>
            </div>
          </a>
          <a href="https://github.com/Saabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-github" v-html="require('~/assets/images/svg/github.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Github</div>
              <div class="c-social-media__handle">@saabbir</div>
            </div>
          </a>
          <a href="https://codepen.io/Saabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-codepen" v-html="require('~/assets/images/svg/codepen.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Codepen</div>
              <div class="c-social-media__handle">@saabbir</div>
            </div>
          </a>
          <a href="https://stackoverflow.com/users/5527156/saabbir" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-stackoverflow" v-html="require('~/assets/images/svg/stackoverflow.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Stackoverflow</div>
              <div class="c-social-media__handle">@saabbir</div>
            </div>
          </a>
          <!-- <a href="https://www.upwork.com/o/profiles/users/~0125f9d541d9412fba/" class="c-social-media" target="_blank">
            <div class="c-social-media__icon">
              <div class="c-social-media__icon-upwork" v-html="require('~/assets/images/svg/upwork.svg?include')"></div>
            </div>
            <div class="c-social-media__info">
              <div class="c-social-media__name">Upwork</div>
              <div class="c-social-media__handle">I'm available here for freelance work</div>
            </div>
          </a> -->
        </div><!-- /.c-social-media-grid -->
      </div>
      <div class="c-contact-form-container u-mt-32">
        <h2 class="c-contact-form__title u-text-serif u-mb-32">Send a message</h2>
        <form action="https://formcarry.com/s/OZHIhto2IeZ" method="POST" accept-charset="UTF-8" class="c-form c-contact-form" id="c-formcarry-form">
          <input type="hidden" name="_gotcha"><!-- use this to prevent spam -->
          <div class="c-form__group c-form__group--required">
            <label class="c-form__label" for="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" class="c-form__control" placeholder="Your name" required>
          </div>
          <div class="c-form__group c-form__group--required">
            <label class="c-form__label" for="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" class="c-form__control" placeholder="Your email address" required>
          </div>
          <div class="c-form__group c-form__group--required">
            <label class="c-form__label" for="user_msg">Message</label>
            <textarea id="user_msg" name="user_msg" class="c-form__control" placeholder="Your message" required></textarea>
          </div>
          <div class="c-form__group">
            <button type="submit" class="c-button c-button--lg c-form__submit-button">Submit</button>
          </div>
        </form>
      </div>      
    </div>
  </div>
</template>

<script>
  import driftBot from '@/utils/driftBot';
  import vhHack from '@/utils/vhHack';
  
  export default {
    name: 'Contact',
    head() {
      return {
        title: 'Contact - Saabbir Hossain',
      }
    },
    mounted() {
      // Load drift widget after window finished loading
      window.onload = driftBot;

      // Set --vh CSS custom property
      vhHack();

      // Submit contact form
      $(function() {
        $(".c-contact-form").submit(function(e) {
          // Prevent default form submission
          e.preventDefault();

          // Get endpoint URL
          var href = $(this).attr("action");

          // Create AJAX request to submit the form
          $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            timeout: 6000, // sets timeout to 6 seconds
            beforeSend: function() {
              $('.c-form__submit-button')
                .text('Submitting...')
                .css('pointer-events', 'none')
                .append('<div class="c-loader"></div>');
            },
            success: function(response) {
              if(response.status == "success") {
                // Remove loader
                $('.c-loader').remove();

                // Success text
                $('.c-form__submit-button').text('Submitted successfully!');

                // After 3 seconds, get back to normal state
                setTimeout(function() {
                  // Reset submit button text
                  $('.c-form__submit-button')
                    .text('Submit')
                    .css('pointer-events', 'auto');
                  
                  // Reset form inputs
                  document.querySelector('.c-contact-form').reset();
                }, 3000);
              } else {
                alert("An error occured: " + response.message);
              }
            }
          });
        });
      });
    },
  }
</script>