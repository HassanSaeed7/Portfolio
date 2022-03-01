import footerStyles from "../styles/Footer.module.css"

const Footer = () => {
  return (
  <footer id="contact">

      <div className={footerStyles.contactContainer}>
      
          <h3 className={footerStyles.contactHeader}>Contact</h3>
       

        <ul className={footerStyles.contactLinks}>
          <li>
            <a
              class="contactbtn github"
              href="https://github.com/HassanSaeed7"
              target="_blank"
              >GITHUB</a>
          </li>

          <li>
            <a class="contactbtn resume" href="https://drive.google.com/file/d/1IUpQ4RwVX6Qbd2CqGKCGgsdyoxRjYlTt/view?usp=sharing" target="_blank"
              >RESUME</a>
          </li>

         
          <li>
            <a
              class="contactbtn email"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hsaeed1007@gmail.com"
              target="_blank"
              >EMAIL</a>
          </li>
          <li>
            <a
              class="contactbtn cert"
              href="https://www.freecodecamp.org/hassansaeed"
              target="_blank"
              >CERTIFICATIONS</a>
          </li>
        </ul>
      </div>

    </footer>

  )
}

export default Footer