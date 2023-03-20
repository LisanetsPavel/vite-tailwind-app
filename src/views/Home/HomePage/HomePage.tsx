import mockImg1 from '@/assets/mockImg1.jpg';

export default function HomePage() {
  return (
    <section>
      <div className=" grid grid-cols-4 gap-2 bg-gray-200 rounded-lg dark:bg-gray-500 dark:text-gray-200">
        <div className="p-4 ">
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
        </div>
        <div className="p-4 ">
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
        <div className="col-span-2">
          <img alt="" className="p-4 hover:brightness-200" src={mockImg1} />
        </div>
        <div className="p-4 col-span-4">
          <p>
            Sit amet commodo nulla facilisi nullam. Vulputate mi sit amet mauris
            commodo quis imperdiet. Sed enim ut sem viverra aliquet eget sit
            amet tellus. Nec tincidunt praesent semper feugiat. Nunc mi ipsum
            faucibus vitae aliquet nec ullamcorper. Erat velit scelerisque in
            dictum non consectetur a erat nam. Nisl tincidunt eget nullam non.
            Gravida neque convallis a cras. Erat nam at lectus urna duis
            convallis convallis tellus id. Volutpat maecenas volutpat blandit
            aliquam. Dictum sit amet justo donec enim diam vulputate. Posuere ac
            ut consequat semper viverra.
          </p>
          <p>
            Accumsan in nisl nisi scelerisque eu. Adipiscing elit ut aliquam
            purus sit amet luctus. Imperdiet nulla malesuada pellentesque elit
            eget gravida cum. Eget nulla facilisi etiam dignissim diam quis enim
            lobortis scelerisque. Nunc aliquet bibendum enim facilisis gravida
            neque convallis a. Fermentum posuere urna nec tincidunt praesent
            semper feugiat nibh. Praesent tristique magna sit amet purus
            gravida. Tortor consequat id porta nibh venenatis cras sed felis
            eget. Habitant morbi tristique senectus et netus et malesuada fames
            ac. Aliquet bibendum enim facilisis gravida neque convallis a cras
            semper. Mauris nunc congue nisi vitae suscipit tellus mauris. Turpis
            egestas pretium aenean pharetra magna.
          </p>
          <p>
            Purus in mollis nunc sed id semper risus in. Elit eget gravida cum
            sociis natoque penatibus. Fusce ut placerat orci nulla. Ultricies mi
            quis hendrerit dolor magna eget est lorem. In hac habitasse platea
            dictumst quisque sagittis purus. Morbi tristique senectus et netus.
            Tempus iaculis urna id volutpat lacus laoreet. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio. Ultrices vitae auctor eu
            augue. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.
            Massa massa ultricies mi quis hendrerit dolor. Odio ut sem nulla
            pharetra diam sit amet. Sit amet dictum sit amet. Non quam lacus
            suspendisse faucibus interdum posuere lorem ipsum. Tincidunt id
            aliquet risus feugiat in ante metus. Orci ac auctor augue mauris
            augue. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim
            facilisis. Maecenas volutpat blandit aliquam etiam erat velit
            scelerisque in dictum.
          </p>
        </div>
      </div>
    </section>
  );
}
