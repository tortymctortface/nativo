import React from 'react';

import img from '../../images/logo.png';

const TopBar = () => (
    <div>
      <h1 class="mt-2 ml-3 mr-2 d-inline-block">Nativo</h1>

        <img src={img} width="50px" class="mb-3 d-inline-block" alt="nativo logo"/>
    </div>
);
export default TopBar;