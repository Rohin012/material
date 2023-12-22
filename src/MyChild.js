import React from 'react'

function MyChild() {

  console.log(("This is the change"));
  return (
    <div>MyChild</div>
  )
}

// export default React.memo(MyChild,(pre,next)=>{

//   if(pre.p.data.length === next.p.data.length)
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }

// });

export default React.memo(MyChild);
