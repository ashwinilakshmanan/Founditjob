import React,{useState,useEffect} from 'react'


function Job(props) {
    const {
        company,
        contract,
        featured,
        id,
        languages,
        level,
        location,
        logo,
        position,postedAt,
        role,tools
    } = props.data

    let keywords =[role,level,...languages,...tools];

    const [icon,setIcon] = useState();

    const importSvgs =() =>{
      const logoSvg = import(`${logo}`).then(d=>{
        console.log(d);
        setIcon(d.default)
      })
    }

    useEffect(()=>{
      importSvgs();
    },[logo])
  return (
    <>
    <div className='job-container'>
        <div className='logo'>
            <img src={icon} alt='logo'/>
        </div>
        <div className='part1'>
            <div className='company'>
                <div className='cname'>{company}</div>
                {props.data.new && <span className='new'>new!</span>}
                {props.data.featured &&<span className='featured'>featured</span>}
            </div>
            <div className='position'>{position}</div>
            <div className='details'>
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </div>

            <div className='part2'>
                {
                  keywords.map((key,id)=>{
                    return(
                      <button key={id} onClick={()=>props.setKeywords(key)}>{key}</button>
                    )
                    
                  })
                }
            </div>
        </div>
        
      {/* {props.data.company} */}
    </div>
    </>
  )
}

export default Job
