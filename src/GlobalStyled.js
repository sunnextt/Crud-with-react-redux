import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
body {
  background-color: #c8d8e4;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  color: #2b3e51;
}

h2 {
  font-weight: 300;
  text-align: center;
}

p {
  position: relative;
}

a,
a:link,
a:visited,
a:active {
  color: #3ca9e2;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
a:focus, a:hover,
a:link:focus,
a:link:hover,
a:visited:focus,
a:visited:hover,
a:active:focus,
a:active:hover {
  color: #329dd5;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}


#login-form {
  padding: 0 60px;
}

#create-account-wrap {
  background-color: #eeedf1;
  color: #8a8b8e;
  font-size: 14px;
  width: 100%;
  padding: 10px 0;
  border-radius: 0 0 4px 4px;
}

.delIcon {
        color: red;
        cursor: pointer;
    }

 .editIcon {
        color: blue;
        cursor: pointer;
    }

    button {
      cursor: pointer;
      display: flex ;
      justify-content: center;
      align-items: center;
    }
`;
