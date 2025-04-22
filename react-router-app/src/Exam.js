//URL 파라미터를 사용하여 다국어 지원을 위한 경로 만들기
//EX) /:lang/home 으로 언어코드를 받아서 해당 언어에 맞는 내용을 보여준다
//EX) /eng/home, /kor/home

//컴포넌트 이름은 Home

import { useParams, Link } from "react-router-dom";

const Home = () => {

    const {lang} = useParams();

    const content = {
        ko: {
        greeting: '안녕하세요!',
        description: '이것은 한국어 페이지입니다.',
        },
        en: {
        greeting: 'Hello!',
        description: 'This is an English page.',
        },
        jp: {
        greeting: 'こんにちは！',
        description: 'これは日本語のページです。',
        },
    };

    const language = content[lang];

    if(!language){
        return <div>지원하지 않는 언어입니다.</div>
    }

    return(
        <div>
            <h2>{language.greeting}</h2>
            <p>{language.description}</p>
        </div>
    )
}

//상품별 카테고리와 상품 상세 페이지 구현하기
//카테고리별 상품들이 나오게 만들자
//- 카테고리 경로 : /categories/:categoriId
//- 상품 상세 경로 : /categories/:categoriId/products/:productId

//카테고리컴포넌트 <Categories />
//상품목록컴포넌트 <Products />
//상품상세페이지 <ProductDetail />

 //- 카테고리
const Categories = () => { 

    const categories = [
    { id: 1, name: '전자제품' },
    { id: 2, name: '의류' },
    { id: 3, name: '식료품' },
    ];

    return(
        <div>
            <nav>
                <ul>
                    {categories.map(categori=> (
                        <li key={categori.id}>
                            <Link to={`/categories/${categori.id}`}>{categori.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

//- 카테고리별 상품
const Products = () => {

    const {categoriId} = useParams();

    const products = [
    { id: 1, name: '노트북', categoryId: '1' },
    { id: 2, name: '스마트폰', categoryId: '1' },
    { id: 3, name: '셔츠', categoryId: '2' },
    { id: 4, name: '청바지', categoryId: '2' },
    { id: 5, name: '사과', categoryId: '3' },
    { id: 6, name: '우유', categoryId: '3' },
    ];

    const product_filter = products.filter(x => x.categoryId === categoriId);

    return(
        <div>
           <nav>
                <ul>
                    {product_filter.map(product=> (
                        <li key={product.id}>
                            <Link to={`/categories/${categoriId}/products/${product.id}`}>{product.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )

}

//- 상품 상세 정보를 담은 배열
const ProductDetail = () => {

    const {categoriId,productsId} = useParams();

    const p_detail = [
    { id: 1, name: '노트북', description: '최신형 노트북입니다.', categoryId: '1' },
    { id: 2, name: '스마트폰', description: '최신 스마트폰입니다.', categoryId: '1' },
    { id: 3, name: '셔츠', description: '멋진 셔츠입니다.', categoryId: '2' },
    { id: 4, name: '청바지', description: '편안한 청바지입니다.', categoryId: '2' },
    { id: 5, name: '사과', description: '신선한 사과입니다.', categoryId: '3' },
    { id: 6, name: '우유', description: '신선한 우유입니다.', categoryId: '3' },
    ];

    const detail_filter = p_detail.filter(x => x.id == productsId);

    return(
        <div>
           <nav>
                <ul>
                    {detail_filter.map(detail=> (
                        <li key={detail.id}>
                            <Link to={`/categories/${categoriId}/products/${productsId}`}>{detail.name} : {detail.description}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )

}




export {Home, Categories, Products, ProductDetail};