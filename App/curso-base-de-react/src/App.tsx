interface ICardProps {
  title: string ;
  children: React.ReactNode; 
}

const Card = ({ title, children }: ICardProps) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      <span>Title: {title}</span>

      <div>
        {children}
      </div>

      <div>
        Footer
      </div>
    </div>
  )
}

export function App() {

  return (
    <>
      olá
      <p>Card:</p>
      <Card title="Card 1" children="Context 1"/>
      <Card title="Card 2" children="Context 2"/>
      <Card title="Card 3" children="Context 3"/>
    </>
  )
  
}