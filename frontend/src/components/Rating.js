function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span> {numReviews} reviews</span>
    </div>
  );
}
export default Rating;

/*i = icon, Para a classe (className) vai uma expressão (expression) que é: para o rating >= 1, então eu preciso colocar(set = ?) 
    a className para Font awsome star (fas fa-star = estrela cheia), 
    caso contrário (caso contrário = :) eu preciso checar se o rating >= 0,5 
    se sim setar meia estrela (set = ?) (meia estrela = fas fa-star-half-alt), 
    caso contrário (:) colocar uma estrela vazia (far fa-star), 
    
    obs: lembrar que <fas fa-star> (FAS) é estrela pintada e <far fa=star> (FAR) é estrela vazia 
    obs2: Lembrar de importar no index.html em cima de title 
    obs3: Para mudar a cor mudar o .rating span no index.css
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css" /> 
    */
