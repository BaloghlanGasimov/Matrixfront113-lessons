import React from 'react'
import SingleCard from '../SingleCard'

import data from '../data'

const Shop = () => {
  return (
    <div className='shopComponent'>


        {/* <SingleCard title="Azerbaycan" desc="Baki" img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAteJQni/vM0D///8AvOv6ISr4JkE9pC7vKDfvLDrvMT7uFSnvLTv709XuHi/uGCvuIzP83N7+9PX0h435v8LwPEj0iI76ycv97O3uDyX2naHzcnnyanL0fIP94+X82933q6/yXmf3o6fxTlj1kpftABftAAjyY2v1kJbwRFD4t7v5xcj0f4b3qKz+8PH6ztGwnb5uAAADQUlEQVR4nO3b2XLaMABGYRp3keUViNkdcEhCmzTJ+79dgRSzFAzp34nUmfNdccGF54yxFuRWCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4B/6DEHrCwStK+9YG4fGhLG1rq/kPN/yWZPlRVX2euWiyLM8dn09Z3iVb9nuxyjpBL91ktt5ZLy+B33KZ6JuOzhwc5f6HNCffHHU7RzGW7vLQtfXdpI3+fL5zX61QdLv96erooMqdX11p3iSz0a9vXTPizjK0jTNoqK8DoLbyNMfsB/5bPS4Ey+ZDPN408uGadrrJJmf/bzIZ6P+zp23iA6eddYMR20/BxAv8g2ftvUejw4U+Xzm5Szah3zZ7bZe98RTztoJ+Y4yk2298ckx1tri7YNXCxH3+azZTvfK8zOUeOLTLNB9vnQ76M6y81+POj49BJ3ns/PtAu2C2V04CbrmAy7rQs7zpdd1vqrpsWbCzdeTt3s09qGi63z2qq731PTTNaPxcBnQpssvFsubNIyqZw/6uc5nRnW+edPNF1fBTTk0plztIZhwOEmCsQdjiOt8Wb1FNW0eN6JkuSDp3r+unpEP4/bqSflBl9jEcT6bb/elmn+L8WK9onsbY9aTHA9+u67zheM6X3Fm2I2mu3sywcvwY66wmeN8pl6vdc7lCCd7+Xo+3Hyu822nLcmZBYc1D7s7+YN7L7ZgHOfLkk2Px7zhazZMw26yd/e1v19l7gu6zlfv0M8a8sXp+Cn40+vP3PXcxXW+wabF8+l8cfVyJN7a2PH+i+t83H2KlGefgpFXwrxPwqpDwppXw46LxNzVtx/7fe9nbZ2P3ea/wH8dEv5p0/A/r4RTBhrOuGjSC05YxZywOonzfZILTpdOvdhg+YMX+TjbLDo8WT/jZP378F6HhreKRLzTJuKNSpE1WVpUZbdXVkWeGa+WGEf4lu/qP3ub/CsErW8QtD5BQD4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk5BPQj4J+STkk/wCt9YGQi1kVPEAAAAASUVORK5CYII=" />
        <SingleCard title="Turkiye" desc="Ankara" /> */}


       <div className="row">

       {data.map((item,i)=>{
            return(
                <SingleCard id={item.id} title={item.title} img={item.shown_img} desc={item.desc} />
            )
        })}

       </div>
    </div>
  )
}

export default Shop