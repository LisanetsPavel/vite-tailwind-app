import mockImg1 from '@/assets/mockImg1.jpg';
import mockImg3 from '@/assets/mockImg3.jpg';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section>
      <div className=" grid grid-cols-4 gap-2 bg-gray-200 rounded-lg dark:bg-gray-500 dark:text-gray-200">
        <motion.div
          className="p-4 "
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
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
        </motion.div>
        <motion.div
          className="p-4 "
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
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
        </motion.div>
        <motion.div
          className="col-span-2"
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <img alt="" className="p-4 hover:brightness-200" src={mockImg1} />
        </motion.div>
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
        <motion.div
          className="col-span-2"
          initial={{ x: -800 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <img alt="" className="p-4 hover:brightness-200" src={mockImg3} />
        </motion.div>
        <div>
          <p>
            Morbi quis commodo odio aenean sed. Nec tincidunt praesent semper
            feugiat. Amet facilisis magna etiam tempor orci eu lobortis
            elementum nibh. Suspendisse sed nisi lacus sed viverra tellus in.
            Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
            Lectus arcu bibendum at varius vel. Amet cursus sit amet dictum sit.
            Amet venenatis urna cursus eget nunc scelerisque viverra. Dolor sit
            amet consectetur adipiscing elit duis. Faucibus et molestie ac
            feugiat sed lectus vestibulum mattis. Turpis massa sed elementum
            tempus egestas sed. Elementum nibh tellus molestie nunc non blandit
            massa enim. Vitae aliquet nec ullamcorper sit amet risus nullam eget
            felis. Et magnis dis parturient montes nascetur ridiculus mus.
            Cursus in hac habitasse platea dictumst quisque sagittis. Et
            malesuada fames ac turpis egestas maecenas pharetra convallis
            posuere. Suspendisse interdum consectetur libero id faucibus nisl
            tincidunt eget. At ultrices mi tempus imperdiet nulla malesuada
            pellentesque. Nibh nisl condimentum id venenatis a condimentum vitae
            sapien. Luctus venenatis lectus magna fringilla.
          </p>
        </div>
        <div>
          <p>
            Mauris nunc congue nisi vitae suscipit. Porttitor massa id neque
            aliquam vestibulum morbi. At elementum eu facilisis sed odio morbi
            quis commodo odio. Bibendum at varius vel pharetra vel turpis.
            Tellus in hac habitasse platea dictumst vestibulum. Facilisi cras
            fermentum odio eu feugiat pretium nibh ipsum. Turpis egestas integer
            eget aliquet nibh praesent tristique magna sit. In hac habitasse
            platea dictumst quisque. Sagittis nisl rhoncus mattis rhoncus urna
            neque viverra justo nec. Eu sem integer vitae justo eget magna
            fermentum iaculis. Diam maecenas sed enim ut sem viverra aliquet
            eget. Et netus et malesuada fames ac turpis egestas sed. At lectus
            urna duis convallis convallis tellus id. Commodo nulla facilisi
            nullam vehicula. Nisl pretium fusce id velit ut tortor pretium
            viverra suspendisse. Velit egestas dui id ornare arcu odio ut sem
            nulla. Luctus accumsan tortor posuere ac ut consequat. Libero id
            faucibus nisl tincidunt eget nullam. Enim ut tellus elementum
            sagittis vitae et leo duis. In massa tempor nec feugiat nisl pretium
            fusce id.
          </p>
        </div>
        <div className="p-4 col-span-4">
          <p>
            Turpis egestas maecenas pharetra convallis posuere morbi leo.
            Sagittis orci a scelerisque purus semper eget duis. Elit duis
            tristique sollicitudin nibh sit amet commodo nulla facilisi. Lacus
            suspendisse faucibus interdum posuere lorem ipsum. In arcu cursus
            euismod quis viverra. Senectus et netus et malesuada fames ac turpis
            egestas. Blandit volutpat maecenas volutpat blandit aliquam.
            Sagittis eu volutpat odio facilisis. Viverra adipiscing at in tellus
            integer feugiat scelerisque varius morbi. Erat pellentesque
            adipiscing commodo elit at imperdiet. In cursus turpis massa
            tincidunt dui ut. Pulvinar neque laoreet suspendisse interdum
            consectetur libero id faucibus nisl. Mi sit amet mauris commodo. Ac
            tortor vitae purus faucibus ornare suspendisse sed.
          </p>
          <p>
            Diam maecenas sed enim ut sem viverra aliquet. Aliquam faucibus
            purus in massa tempor nec. Consectetur purus ut faucibus pulvinar
            elementum. In hendrerit gravida rutrum quisque non tellus orci ac
            auctor. Nec dui nunc mattis enim. In aliquam sem fringilla ut morbi.
            Volutpat odio facilisis mauris sit amet massa vitae tortor. Odio
            pellentesque diam volutpat commodo sed egestas egestas fringilla.
            Sit amet consectetur adipiscing elit duis tristique sollicitudin
            nibh. Et egestas quis ipsum suspendisse ultrices gravida dictum
            fusce. Feugiat in fermentum posuere urna nec. Lectus vestibulum
            mattis ullamcorper velit. Neque sodales ut etiam sit amet nisl purus
            in. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo.
            Luctus accumsan tortor posuere ac ut consequat. Cursus eget nunc
            scelerisque viverra mauris in aliquam. Id eu nisl nunc mi.
          </p>
          <p>
            Arcu bibendum at varius vel pharetra. Tortor consequat id porta nibh
            venenatis cras sed felis eget. Id ornare arcu odio ut sem nulla.
            Duis ultricies lacus sed turpis tincidunt id. Commodo quis imperdiet
            massa tincidunt nunc pulvinar sapien et. Malesuada fames ac turpis
            egestas sed tempus urna et pharetra. Quam elementum pulvinar etiam
            non quam lacus suspendisse faucibus interdum. Lacinia at quis risus
            sed. Amet consectetur adipiscing elit pellentesque habitant morbi
            tristique senectus. In dictum non consectetur a erat nam at. Pretium
            lectus quam id leo. Turpis nunc eget lorem dolor sed viverra ipsum
            nunc. Pretium viverra suspendisse potenti nullam ac tortor. Morbi
            non arcu risus quis varius. Nunc consequat interdum varius sit amet
            mattis vulputate. Nec sagittis aliquam malesuada bibendum.
          </p>
        </div>
      </div>
    </section>
  );
}
