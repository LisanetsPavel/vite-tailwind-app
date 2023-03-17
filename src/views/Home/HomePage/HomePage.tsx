import mockImg1 from '@/assets/mockImg1.jpg';

export default function HomePage() {
  return (
    <section>
      <div className="xl:flex bg-gray-200 rounded-lg dark:bg-gray-500 dark:text-gray-200">
        <div className="xl:w-6/12 p-4 flex gap-5 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            scelerisque in dictum non consectetur. Curabitur vitae nunc sed
            velit dignissim sodales ut eu. Nibh venenatis cras sed felis eget
            velit aliquet sagittis id. Ut ornare lectus sit amet est placerat in
            egestas. Dignissim suspendisse in est ante in nibh mauris cursus
            mattis. Dictumst quisque sagittis purus sit amet volutpat consequat
            mauris. Dolor magna eget est lorem ipsum dolor. Nibh venenatis cras
            sed felis eget velit aliquet sagittis id. Accumsan sit amet nulla
            facilisi morbi tempus. Ullamcorper a lacus vestibulum sed arcu.
            Convallis aenean et tortor at. Maecenas pharetra convallis posuere
            morbi leo urna molestie at. Imperdiet massa tincidunt nunc pulvinar
            sapien et ligula ullamcorper. Sagittis orci a scelerisque purus.
          </p>
          <p>
            A cras semper auctor neque vitae. Vitae ultricies leo integer
            malesuada. Et sollicitudin ac orci phasellus egestas tellus rutrum.
            Consectetur lorem donec massa sapien faucibus et molestie. Lorem
            mollis aliquam ut porttitor leo a diam sollicitudin tempor. Et
            sollicitudin ac orci phasellus egestas tellus. Adipiscing elit ut
            aliquam purus sit amet luctus venenatis. Pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at.
            Urna neque viverra justo nec ultrices dui. Eget nunc scelerisque
            viverra mauris in aliquam. Egestas purus viverra accumsan in nisl
            nisi scelerisque eu. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus est pellentesque. Tellus at urna condimentum
            mattis. Venenatis tellus in metus vulputate eu. Luctus accumsan
            tortor posuere ac ut consequat. Cras sed felis eget velit aliquet
            sagittis id consectetur. In dictum non consectetur a erat. Non nisi
            est sit amet. Faucibus turpis in eu mi bibendum neque egestas.
          </p>
        </div>

        <img
          alt=""
          className="xl:w-6/12 p-4 hover:brightness-200"
          src={mockImg1}
        />
      </div>
    </section>
  );
}
