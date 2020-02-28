import React, { Component } from "react";
//import "jquery";

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
            initialItems: [
                "Ignite",
                "Vidya",
                "Veda",
                "Vaidya",
                "make a wish"

            ],
            uitems: ["Ignite",
                "Vidya",
                "Veda",
                "Vaidya",
                "make a wish"
            ],
        };
    }
    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }
    filterList(input) {

        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(input.target.value) !== -1;
        });
        this.setState({ uitems: updatedList });;

    }
    // getInitialState() {
    //   return {
    //     initialItems: [
    //       "Apples",
    //       "Broccoli",
    //       "Chicken",
    //       "Duck",
    //       "Eggs",
    //       "Fish",
    //       "Granola",
    //       "Hash Browns"
    //     ],
    //     items: []
    //   };
    // }
    // componentBigMount() {
    //   this.setState({ items: this.state.initialItems });
    // }
    render() {
        return (<div>
            <div class="pos-f-t m-2">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">donation history</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Volunteer
  </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">service</a>
                                            <a class="dropdown-item" href="#">funds</a>
                                            <a class="dropdown-item" href="#">applications</a>
                                        </div>
                                    </div></a>
                                </li>

                            </ul>
                        </h4>

                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="nav pull-right">
                        <button type="button" class="btn btn-primary navbar-btn">

                            logout
          </button>
                    </div>
                </nav>

            </div>
            <div>
                <button type="button" class="btn btn-primary navbar-btn m-2">

                    Add Event
</button>
            </div>
            <div>
                <form>
                    <fieldset className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search"
                            onChange={this.filterList.bind(this)}
                        />
                    </fieldset>
                </form>
                <ul className="filter-list">
                    {this.state.uitems.map(function (item) {
                        return <li className="list-group-item" data-category={item} key={item}>
                            {item}
                            <div>
                                <button type="button" class="btn btn-primary m-2">
                                    Edit Event
                  </button>
                                <button type="button" class="btn btn-primary">
                                    Delete Event
                  </button>
                            </div>
                        </li>
                    }
                    )
                    }
                </ul>
            </div>
        </div>
        );
    }
}
export default FilteredList;
// class List extends Component {
//   render() {
//     return (
//       <ul className="list-group">
//         {this.state.initialItems.map(item =>
//           <li className="list-group-item" data-category={item} key={item}>
//             {item}
//           </li>
//         )}
//       </ul>
//     );
//   }
// }

//export default List;
