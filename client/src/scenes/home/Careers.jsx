import image from '../../assets/logo.jpg';

function Careers() {
  return (
    <div className="careers">
      <img
        src={image}
        style={{
          width: '50%',
          height: '600px',
          objectFit: 'cover',
          borderRadius: '20px',
        }}
      />
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        laboriosam quam nesciunt eveniet blanditiis ad, maiores numquam est
        temporibus ipsam placeat labore voluptates quibusdam vero vel neque
        reiciendis tempora minus.
      </h3>
    </div>
  );
}

export default Careers;
