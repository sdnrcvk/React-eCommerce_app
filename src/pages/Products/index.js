import React, { Fragment } from 'react'
import Card from '../../components/Card'
import { Flex, Grid, Box, Button } from "@chakra-ui/react";
import { useInfiniteQuery } from 'react-query'
import { fetchProductList } from '../../api';
function Products() {

  const {      
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status, 
  } = useInfiniteQuery('products',fetchProductList,{
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist=lastGroup?.length===12;
      
      if(!morePagesExist){
        return;
      }
      return allGroups.length+1;
    },
  });

  if (status==="loading") return 'Loading...'

  if (status==="error") return 'An error has occurred: ' + error.message

  console.log("data : ",data)
   
  return (
    <div>
        <Grid templateColumns='repeat(4, 1fr)' gap={4}>
            {
              data.pages.map((group,i)=>(
                <Fragment key={i}>
                  {
                    group.map((item)=>(
                      <Box w="100%" key={item.id}>
                        <Card item={item}/>
                      </Box>
                    ))
                  }
                </Fragment>
              ))
            }
        </Grid>
        <Flex mt="10" justifyContent="center">
         <Button
           onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
       </Flex>
    </div>
  )
}

export default Products