import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { getProductsData } from '@/app/screens/ProductListingPage/ProductListingService';
import { getProductDataById } from '@/app/screens/ProductListingPage/ProductListingService';

const Product = async (params) => {
    'use server'
    const data = await getProductDataById(params.params.productId);
    
    return (
        <Box display={'flex'} justifyContent={'space-evenly'}>
            <Box>
                <img src={data.URL}/>
            </Box>
            <Box>
                {data.Name}
            </Box>
        </Box>
    );
}

export default Product;