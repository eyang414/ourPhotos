import React from 'react';
import {Link} from 'react-router';

export default (props) => {
  //map, reduce, html stuff. strings, bools, variables
  const photoIndexFromParams = (props.routeParams.page-1)*8;
  const nextPage = parseInt(props.routeParams.page)+1
  const lastPage = parseInt(props.routeParams.page)-1

  console.log('here is propsroutparamsage', props.routeParams.page, nextPage)
  return (
      <div >
        <h2>
          Your Photos
        </h2>
        <div>
          { props.photos && props.photos.filter((photo) => {
            if (photo.id >= photoIndexFromParams && photo.id < photoIndexFromParams+8){
              return true;
            }
          }).map(elem => {
            return <img key={elem.id} src={elem.url}></img>
          })
        }
        </div>
        {
          parseInt(props.routeParams.page) > 1 ? <button>
            <Link to={`/photos/${lastPage}`}>Last Page</Link>
            </button> : null
        }
        <button>
          <Link to={`/photos/${nextPage}`}>Next Page</Link>
        </button>
      </div>
  );
};

//TODO: make it so that when there are no more images, the Next Page button becomes a "add more photos" button.
