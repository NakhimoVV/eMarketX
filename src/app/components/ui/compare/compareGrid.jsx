import React from 'react'
import PropTypes from 'prop-types'

const CompareGridItem = ({ product }) => {
    product = JSON.stringify(product)
    return (
        <li className="grid__item">
            {product}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            laborum libero corporis ipsa perferendis minus voluptates architecto
            vel, dignissimos exercitationem amet culpa doloribus iusto. Omnis
            voluptatum expedita nostrum amet adipisci?Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Nobis numquam totam harum debitis
            ullam sapiente aspernatur cupiditate, laborum autem fugiat quas ut
            consequuntur ratione ipsam fuga soluta explicabo? Blanditiis,
            atque.lorem Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Delectus saepe deleniti, perferendis nesciunt explicabo, unde
            porro odit tempore quibusdam, deserunt ipsum et cupiditate molestias
            cumque ducimus accusamus. Obcaecati, tenetur numquam? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Aut tempore, hic
            obcaecati nostrum sint dignissimos possimus deserunt recusandae,
            amet iste aspernatur voluptatem explicabo debitis fugiat ex
            quibusdam, eveniet itaque quam.
        </li>
    )
}
CompareGridItem.propTypes = {
    product: PropTypes.object
}
export default CompareGridItem
