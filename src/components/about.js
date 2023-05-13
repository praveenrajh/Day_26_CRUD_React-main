import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container} from 'reactstrap';


export default function About() {
  return (<Container>
        <h1>About This CRUD</h1><hr />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {/* <img src="crud.png" alt=''></img> */}
            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/06/crud.png"
             alt="HTML5 Icon" width="80%" ></img><br/>
            {/* <img src="/crud.png" alt="HTML5 Icon" style="width:128px;height:128px;"></img> */}
        <Typography paragraph><br/>
       <h2 id="whatiscrud">What is CRUD?</h2>
       <ul>
           <li>
               <p>CRUD refers to the four basic operations a software application should be able to perform – Create, Read, Update, and Delete.</p>
            </li>       
            <li>
               <p>In such apps, users must be able to <strong>create data</strong>, have access to the data in the UI by <strong>reading</strong> the data, <strong>update</strong> or <strong>edit</strong> the data, and <strong>delete</strong> the data.</p>
            </li>
            <li>
               <p>In full-fledged applications, CRUD apps consist of 3 parts: an API (or server), a database, and a user interface (UI).</p>
            </li>
            <li>
               <p>The API contains the code and methods, the database stores and helps the user retrieve the information, while the user interface helps users interact with the app.</p>
            </li>
            <li>
                <p>You can make a CRUD app with any of the programming languages out there. And the app doesn’t have to be full stack – you can make a CRUD app with client-side JavaScript.</p>
            </li>
            <li>
                <p>In fact, the app with which I will be showing you how create, read, update and delete operations work is made with client-side JavaScript.</p>
            </li>
            <li>
                <p>Each letter in the CRUD acronym has a corresponding HTTP request method.</p>
            </li>
       </ul>
<table>
<thead>
<tr>
<th><strong>CRUD Operation</strong></th>
<th><strong>HTTP Request Method</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Create</td>
<td>POST</td>
</tr>
<tr>
<td>Read</td>
<td>GET</td>
</tr>
<tr>
<td>Update</td>
<td>PUT or PATCH</td>
</tr>
<tr>
<td>Delete</td>
<td>DELETE</td>
</tr>
</tbody>
</table>
       <hr/>

<h4>You can think about CRUD in this way:</h4>
<ul>
<li>You create a social account and fill in your information - <code>CREATE</code></li>
<li>You get access to the information you entered and people can search for you – <code>READ</code></li>
<li>You get a new job at Google and changed your employment status to employed – <code>UPDATE</code></li>
<li>You get tired of social media toxicity and delete your account - <code>DELETE</code></li>
</ul>
        </Typography>
      </Box>
      </Container>
  );
}