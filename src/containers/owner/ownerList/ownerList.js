import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/auxiliary/auxiliary';
import Owner from '../../../components/ownerComponents/owner/owner';
import { connect  } from 'react-redux';
import {getOwnersList} from '../../../ressources/actions';

class OwnerList extends Component {
    
  constructor(props) {
    super(props);

    this.state = {  
      owner: [],
      loading: false
    };
  }

    componentDidMount = () => {
        console.log("componentDidMount");
        this.props.getOwnersList();
    }
     render() {
        console.log(this.props.owner.ownersItems);   
        console.log('render')

        let owners = [];
        if (this.props.owner && this.props.owner.ownersItems && this.props.owner.ownersItems.length > 0) {
            owners = this.props.owner.ownersItems.map((owner) => {
                return (
                    <Owner key={owner.id} owner={owner} {...this.props} />
                )
            })
        }

        return (
         <Aux>
            <div>
                <Row>
                    <Col mdOffset={10} md={2}>
                        <Link to='/createOwner' >Create Owner</Link>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={12}>
                        <Table responsive striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date of birth</th>
                                    <th>Address</th>
                                    <th>Details</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {owners}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                </div>
             </Aux> 
        )
    }
}


// const mapStateToProps = state => ({
//     owner: state.owner
//   })


// function mapStateToProps(state) {
//     return { owner: state.owner }
//   }

//   function mapDispatchToProps(dispatch) {
//     return { actions: bindActionCreators(getOwnersList, dispatch) }
//   }
  

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(OwnerList)

  const mapStateToProps = ({
    owner
  }) => {
    return {
        owner
    };
  };
  export default connect(
      mapStateToProps,
      {
        getOwnersList,
      }
    )(OwnerList)
  