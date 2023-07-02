    import { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Button, Text, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react';
    import './List.css'
    import Header from '../components/Header';

    const Level = () => {
        
        const [itens, setItens] = useState([])
        const [itensPerPage, setItensPerPage] = useState(9)
        const [currentPage, setCurrentPage] = useState(0)

        const pages = Math.ceil(itens.length / itensPerPage)
        const startIndex = currentPage * itensPerPage;
        const endIndex = startIndex + itensPerPage;
        const currentItens = itens.slice(startIndex, endIndex)

        useEffect(() => {
            axios.get('https://digimon-api.vercel.app/api/digimon')
            .then((response) => {
                setItens(response.data);
            });
        }, []);

            return (
                <><div className="container">
                <Header title="MyDigimon"/>
                    </div>
                    <div className='fn'>{Array.from(Array(pages), (item, index) => {
                        return <button className='pag' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index+1}</button>
                    })}
                    </div>
                    <div className='container'>
                    {currentItens.map(item => {
                        return <div> 
                        <Card >
                        <CardHeader>
                        <Heading size='md'>{item.name}</Heading>
                        </CardHeader>
                        <CardBody>
                        <Text><img src={item.img} alt="" /></Text>
                        </CardBody>
                        <CardFooter>
                        <Text>{item.level}</Text>
                        </CardFooter>
                    </Card>
                        </div>
                    })}
                    <Button  onClick={() => {window.location.replace("./");}}>Back</Button>
                </div>
                </>
            )
    }

    export default Level;