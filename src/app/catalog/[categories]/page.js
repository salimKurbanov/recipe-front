  import Api from '@/utils/Api';
import Categories from '../components/Categories';
import RecipesList from '../components/RecipesList';
import Search from '../components/Search';
import './../css/catalog.scss';

  
  export default async function Catalog({params}) {

    let categories = await Api.get('api/categories/all')
    let recipes = []
    
    return (
        <div className="catalog container">

            <Search />

            <Categories categories={categories}/>

            <RecipesList recipes={recipes}/>

        </div>
    );
  }