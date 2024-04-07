function check(char){
  switch(char){
    case 'a':
      case 'e':
        case 'i':
          case 'o':
            case 'u':
              return <div>vowel</div>
  default:
    return <div>
      not vowel
    </div>
  }
}
function Jsx(){
  return (
    <div>
      <h3>
        Switch case
      </h3>
      {
        check('t')
      }
    </div>
  )
}
export function Greet (){
  return <h1>
    Hello world!!
  </h1>
}
export default Jsx;
